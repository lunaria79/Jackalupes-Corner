---
cssclasses:
  - pokemon
---

```yaml enhanced-tables
yes-format: "1" 
no-format: "0"
filter: $row.numberColumn > 1200
columns:
  Number column:
    alias: numberColumn
    type: number
    number-format: "style: 'currency', currency: 'EUR'"
  Date:
    type: date
    date-format: YYYY/MM/DD
  Formatted:
    formatter: "`#${$row.Id}) ${$cell}`"
    nowrap: true
  Collected:
    type: bool
  Evolving:
    type: bool
  Held Item:
    type: bool
filter: Boolean($row.Collected) > 0
filters:
    Evolving: $row.Evolving === 'TRUE'
pagination:
  page-size: 50
  page-sizes:
   - 50
   - 100
style: |
   th {
     background-color: var(--color-base-50) !important;
     color: var(--color-base-70) !important;
   }
# hide-controls: true
hide-configuration: false
```
| Region | Pokedex | Pokemon                            | Pokedex Entry                                  | Egg                                    | Type A | Type B | Best Field | Collected | Evolving | Status                                          |
| ------ | ------- | ---------------------------------- | ---------------------------------------------- | -------------------------------------- | ------ | ------ | ---------- | --------- | -------- | ----------------------------------------------- |
| Kanto  | 0037    | ![vulpix](01%20Pokemon/vulpix.gif) | [Vulpix](https://pokemondb.net/pokedex/vulpix) | ![Vulpix_Egg](02%20Egg/Vulpix_Egg.png) | Fire   | -      | Fire       | 1         | 0        | ![vulpix-status](03%20Status/vulpix-status.png) |
|        |         |                                    |                                                |                                        |        |        |            |           |          |                                                 |
