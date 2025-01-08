
TABLE p[1]
FROM #puzzles AND "All Items"
FLATTEN list(split(file.folder, "/")) as p
