@echo off
echo Updating website with smoother page load...
git add .
git commit -m "Improve page load smoothness and fix initial display"
git push origin main
echo.
echo Done! Changes pushed to GitHub.
pause
