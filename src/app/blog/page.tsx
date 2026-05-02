"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { blogPosts as initialPosts, categories, Article } from '@/data/blogPosts';

function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState<Article[]>(initialPosts);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [editingPost, setEditingPost] = useState<Article | null>(null);
  const [showForm, setShowForm] = useState(false);

  const ADMIN_PASSWORD = "raki"; // Change this to your preferred password

  const handleToggleEditMode = () => {
    if (isEditMode) {
      setIsEditMode(false);
      return;
    }

    if (isAuthorized) {
      setIsEditMode(true);
    } else {
      const password = prompt("Enter Admin Password:");
      if (password === ADMIN_PASSWORD) {
        setIsAuthorized(true);
        setIsEditMode(true);
      } else if (password !== null) {
        alert("Incorrect password!");
      }
    }
  };

  // Persistence logic
  useEffect(() => {
    const saved = localStorage.getItem('blog_posts');
    if (saved) {
      try {
        setPosts(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load posts from storage");
      }
    }
  }, []);

  const saveToStorage = (newPosts: Article[]) => {
    setPosts(newPosts);
    localStorage.setItem('blog_posts', JSON.stringify(newPosts));
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this post?")) {
      const filtered = posts.filter(p => p.id !== id);
      saveToStorage(filtered);
    }
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const postData: Partial<Article> = {
      title: formData.get('title') as string,
      snippet: formData.get('snippet') as string,
      category: formData.get('category') as string,
      accentColor: formData.get('accentColor') as string,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    };

    if (editingPost) {
      const updated = posts.map(p => p.id === editingPost.id ? { ...p, ...postData } : p);
      saveToStorage(updated);
    } else {
      const newPost: Article = {
        ...postData as Article,
        id: Date.now(),
        slug: (postData.title || '').toLowerCase().replace(/ /g, '-'),
      };
      saveToStorage([newPost, ...posts]);
    }
    setShowForm(false);
    setEditingPost(null);
  };

  const filteredArticles = activeCategory === "All" 
    ? posts 
    : posts.filter(article => article.category === activeCategory);

  return (
    <main className="w-full max-w-5xl mx-auto pb-20 opacity-0 animate-fade-in-up">
      {/* Header Section */}
      <header className="mb-16 space-y-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900/5 dark:bg-white/5 border border-zinc-900/10 dark:border-white/10 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Insights & Thoughts
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
            BLOG<span className="text-zinc-400">.</span>
          </h1>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={handleToggleEditMode}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all border ${isEditMode ? 'bg-red-500 text-white border-red-600 shadow-lg shadow-red-500/20' : 'bg-zinc-900/5 dark:bg-white/5 text-zinc-500 border-zinc-900/10 dark:border-white/10 shadow-sm'}`}
          >
            {isEditMode ? 'Exit Edit Mode' : 'Manage Blog'}
          </button>
          {isEditMode && (
            <button 
              onClick={() => { setEditingPost(null); setShowForm(true); }}
              className="px-4 py-2 bg-zinc-900/5 dark:bg-white/5 text-zinc-500 dark:text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl border border-zinc-900/10 dark:border-white/10"
            >
              + Add Post
            </button>
          )}
        </div>
      </header>

      {/* Editor Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] p-8 w-full max-w-lg shadow-2xl border border-white/20 animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-6">{editingPost ? 'Edit Post' : 'New Post'}</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Title</label>
                <input name="title" defaultValue={editingPost?.title} required className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-3 outline-none focus:ring-2 ring-zinc-400" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Snippet</label>
                <textarea name="snippet" defaultValue={editingPost?.snippet} required className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-3 h-32 outline-none focus:ring-2 ring-zinc-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Category</label>
                  <select name="category" defaultValue={editingPost?.category} className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-3 outline-none">
                    {categories.filter(c => c !== "All").map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Accent Color</label>
                  <select name="accentColor" defaultValue={editingPost?.accentColor} className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-3 outline-none">
                    <option value="bg-blue-500">Blue</option>
                    <option value="bg-orange-500">Orange</option>
                    <option value="bg-purple-500">Purple</option>
                    <option value="bg-emerald-500">Green</option>
                    <option value="bg-rose-500">Red</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="submit" className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-4 rounded-2xl font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">Save Post</button>
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 font-bold uppercase tracking-widest hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navigation / Filter Dropdown */}
      <div className="relative mb-12 sticky top-24 z-20 w-full max-w-[280px]">
        <div className="group">
          <button 
            className="w-full flex items-center justify-between px-6 py-3 bg-zinc-900/5 dark:bg-white/5 backdrop-blur-md border border-zinc-900/10 dark:border-white/10 rounded-2xl text-sm font-bold text-zinc-500 hover:bg-zinc-900/10 dark:hover:bg-white/10 transition-all shadow-sm"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4.5h18m-18 5h18m-18 5h18m-18 5h18" /></svg>
              {activeCategory === "All" ? "Filter Category" : activeCategory}
            </span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>
          
          <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-900/10 dark:border-white/10 rounded-[1.5rem] shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-zinc-900/10 dark:bg-white/10 text-zinc-900 dark:text-white"
                    : "text-zinc-500 hover:bg-zinc-900/5 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Uniform Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, index) => (
          <article
            key={article.id}
            className={`group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/5 dark:bg-white/5 backdrop-blur-sm border border-zinc-900/10 dark:border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-zinc-900/10 dark:hover:bg-white/10 h-[380px]`}
            style={{ transitionDelay: `${index * 20}ms` }}
          >
            {/* Background Glow Effect */}
            <div className={`absolute -right-12 -top-12 w-48 h-48 ${article.accentColor} opacity-[0.02] group-hover:opacity-[0.05] rounded-full blur-[60px] transition-opacity duration-300`} />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${article.accentColor} text-white`}>
                  {article.category.split(' ')[0]}
                </span>
                {isEditMode ? (
                  <div className="flex gap-2">
                    <button onClick={() => { setEditingPost(article); setShowForm(true); }} className="p-2 bg-blue-500 rounded-lg text-white hover:scale-105 transition-transform">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                    </button>
                    <button onClick={() => handleDelete(article.id)} className="p-2 bg-red-500 rounded-lg text-white hover:scale-105 transition-transform">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                ) : (
                  <span className="text-[11px] font-medium text-zinc-400 dark:text-zinc-500">
                    {article.date}
                  </span>
                )}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-300">
                  {article.snippet}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="relative z-10 mt-auto pt-6 flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-zinc-900 dark:text-white">
                Read Article
              </span>
              
              <div className="w-10 h-10 rounded-2xl bg-zinc-900/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-zinc-900 dark:group-hover:bg-white transition-all duration-300 shadow-sm group-hover:shadow-lg">
                <svg 
                  className="w-4 h-4 text-zinc-900 dark:text-zinc-100 group-hover:text-white dark:group-hover:text-zinc-900 transform group-hover:translate-x-0.5 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            
            {/* Subtle Border Glow on Hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-white/30 dark:group-hover:border-zinc-700/30 rounded-[2.5rem] transition-colors duration-300" />
          </article>
        ))}
      </div>
      
      {isEditMode && (
        <div className="mt-20 p-10 border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-[2.5rem] text-center bg-zinc-50/50 dark:bg-zinc-900/30">
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-xl font-bold">Export Changes</h3>
            <p className="text-sm text-zinc-500">You are in Edit Mode. Changes are saved to your browser's Local Storage. To save them permanently, copy the data below into your source code.</p>
            <button 
              onClick={() => {
                const code = `export const blogPosts = ${JSON.stringify(posts, null, 2)};`;
                navigator.clipboard.writeText(code);
                alert("Data copied to clipboard! You can paste this into src/data/blogPosts.ts to save permanently.");
              }}
              className="w-full px-6 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl font-bold uppercase tracking-widest hover:scale-[1.02] transition-transform shadow-xl border-2 border-zinc-900 dark:border-zinc-200"
            >
              Copy Data to Code
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center">Loading Blog...</div>}>
      <BlogContent />
    </Suspense>
  );
}
