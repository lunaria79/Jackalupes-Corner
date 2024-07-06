---
cssclasses:
  - pokemon
---

```yaml enhanced-tables
yes-format: "TRUE" 
no-format: "FALSE"
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
filter: $row.Collected === 'true'
filters:
    Evolving: $row.Evolving === 'false'
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
| Region | Pokedex | Pokemon                              | Pokedex Entry                                    | Egg                                    | Type A   | Type B | Best Field | Collected | Evolving | Status                                   | Status Image                                      | Held Item | Item Image                                   | Item Name |
| ------ | ------- | ------------------------------------ | ------------------------------------------------ | -------------------------------------- | -------- | ------ | ---------- | --------- | -------- | ---------------------------------------- | ------------------------------------------------- | --------- | -------------------------------------------- | --------- |
| Kanto  | 0037    | ![vulpix](01%20Pokemon/vulpix.gif)   | [Vulpix](https://pokemondb.net/pokedex/vulpix)   | ![Vulpix_Egg](02%20Egg/Vulpix_Egg.png) | Fire     |        | Fire       | TRUE      | FALSE    | ![vulpix](03%20Status/vulpix-status.svg) |                                                   | TRUE      | ![everstone](04%20Held%20Item/everstone.png) | Everstone |
| Kanto  | 0133    | ![eevee](01%20Pokemon/eevee.gif)     | [Eevee](https://pokemondb.net/pokedex/eevee)     | ![Eevee_Egg](02%20Egg/Eevee_Egg.png)   | Normal   |        | Normal     | FALSE     | FALSE    |                                          |                                                   | FALSE     |                                              | None      |
| Kanto  | 0135    | ![jolteon](01%20Pokemon/jolteon.gif) | [Jolteon](https://pokemondb.net/pokedex/jolteon) | ![Eevee_Egg](02%20Egg/Eevee_Egg.png)   | Electric |        | Electric   | FALSE     | TRUE     |                                          | ![jolteon-status](03%20Status/jolteon-status.svg) | FALSE     |                                              | None      |