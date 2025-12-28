@echo off
echo Cloning existing repository...
git clone https://github.com/GaneshProfessor/Movie-Landing-Page.git temp_repo

echo Removing sample index.html...
del temp_repo\index.html

echo Copying all project files to repository...
xcopy /E /I /Y *.* temp_repo\
xcopy /E /I /Y image temp_repo\image\
xcopy /E /I /Y video temp_repo\video\

echo Navigating to repository...
cd temp_repo

echo Adding all files...
git add .

echo Creating commit...
git commit -m "Add complete responsive Movies Hub website"

echo Pushing to GitHub...
git push origin main

echo Cleaning up...
cd ..
rmdir /S /Q temp_repo

echo Done! Your website is now live on GitHub Pages.
pause
