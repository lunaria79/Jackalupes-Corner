```dataview
TABLE rows.file.link as "Statute"
FROM "⚖️ Law/Statute/Personal Property Security Act, RSO 1990, c P.10"
WHERE file.name != this.file.name
GROUP BY regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS Section
```