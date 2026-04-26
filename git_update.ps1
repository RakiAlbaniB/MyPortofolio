Write-Host "Membatalkan staging saat ini..." -ForegroundColor Cyan
git reset

Write-Host "Membuat dan pindah ke branch baru: feature/redesign-ui..." -ForegroundColor Cyan
git checkout -b feature/redesign-ui

Write-Host "Menambahkan file yang berkaitan dengan UI..." -ForegroundColor Cyan
git add src/
git add public/

Write-Host "Melakukan commit..." -ForegroundColor Cyan
git commit -m "feat: redesign portfolio interface and layout"

Write-Host "Mengunggah (push) ke GitHub..." -ForegroundColor Cyan
git push -u origin feature/redesign-ui

Write-Host "Selesai!" -ForegroundColor Green
