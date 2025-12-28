@echo off
echo ========================================
echo Deploying to GitHub Pages
echo ========================================

echo.
echo Step 1: Initializing git...
git init

echo.
echo Step 2: Adding remote repository...
git remote add origin https://github.com/GaneshProfessor/Movie-Landing-Page.git 2>nul
git remote set-url origin https://github.com/GaneshProfessor/Movie-Landing-Page.git

echo.
echo Step 3: Fetching existing repository...
git fetch origin main

echo.
echo Step 4: Pulling existing files...
git pull origin main --allow-unrelated-histories

echo.
echo Step 5: Removing old index.html if exists...
if exist index.html.old del index.html.old
git rm --cached index.html 2>nul

echo.
echo Step 6: Adding all your project files...
git add .

echo.
echo Step 7: Creating commit...
git commit -m "Update: Complete responsive Movies Hub website with mobile support"

echo.
echo Step 8: Pushing to GitHub...
git push -u origin main

echo.
echo ========================================
echo SUCCESS! Your website is now live at:
echo https://ganeshprofessor.github.io/Movie-Landing-Page/
echo ========================================
echo.
pause
