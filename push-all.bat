@echo off
echo Pushing all files to GitHub...

git init
git add .
git commit -m "Complete responsive Movies Hub website"
git branch -M main
git remote add origin https://github.com/GaneshProfessor/Movie-Landing-Page.git
git push -f origin main

echo.
echo Done! All files pushed to GitHub.
echo Your site will be live at: https://ganeshprofessor.github.io/Movie-Landing-Page/
pause
