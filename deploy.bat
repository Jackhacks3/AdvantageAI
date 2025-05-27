@echo off
echo Setting up Git configuration...
git config user.email "jgewirz@gmail.com"
git config user.name "Jackhacks3"

echo Removing existing remote...
git remote remove origin 2>nul

echo Please set your GitHub token as an environment variable:
echo set GITHUB_TOKEN=your_token_here
echo.
echo Then run: git remote add origin https://%%GITHUB_TOKEN%%@github.com/Jackhacks3/AdvantageAI.git
echo Finally run: git push -u origin master

pause 