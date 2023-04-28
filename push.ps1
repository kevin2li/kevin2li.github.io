echo "[1/4] clean src folder..."
rm -r src\*

echo "[2/4] recover preversed folder..."
cp -r .\backup\* src

echo "[3/4] regenerate blog folder..."
# ./migrate.py
C:\tools\miniconda3\envs\scaffold\python.exe ./migrate.py

echo "[4/4] prepare commit and push..."
git add .
git commit -m "update"
git push

echo "Done!"