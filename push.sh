echo "[1/4] clean src folder..."
rm -rf "src/!(vanblog)"

echo "[2/4] recover preversed folder..."
cp -r ./backup/* src

echo "[3/4] regenerate blog folder..."
# ./migrate.py
/home/kevin2li/miniconda3/bin/python ./migrate.py

echo "[4/4] prepare commit and push..."
git add .
git commit -m "update"
git push
echo "Done!"