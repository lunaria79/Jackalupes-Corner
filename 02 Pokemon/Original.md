---
cssclasses:
  - pokemon
---

```yaml enhanced-tables
yes-format: "1" 
no-format: "0"
columns:
  Collected:
    type: bool
  Evolving:
    type: bool
  Held Item:
    type: bool
filter: Boolean($row.Collected) > -1
filters:
    Evolving: Boolean($row.Evolving) > 0
pagination:
  page-size: 15
  page-sizes:
   - 15
   - 30
style: |
   th {
     background-color: var(--color-base-50) !important;
     color: var(--color-base-70) !important;
   }
# hide-controls: true
hide-configuration: true
```

| Region | Pokedex | Pokemon                                  | Pokedex Entry                                        | Egg                                          | Type A | Type B | Best Field | Collected | Evolving | Status                                                |
| ------ | ------- | ---------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | ------ | ------ | ---------- | --------- | -------- | ----------------------------------------------------- |
| Kanto  | 0037    | ![vulpix](01%20Pokemon/vulpix.gif)       | [Vulpix](https://pokemondb.net/pokedex/vulpix)       | ![Vulpix_Egg](02%20Egg/Vulpix_Egg.png)       | Fire   | -      | Fire       | 1         | 0        | ![vulpix-status](03%20Status/vulpix-status.png)       |
| Kanto  | 0038    | ![ninetales](01%20Pokemon/ninetales.gif) | [Ninetales](https://pokemondb.net/pokedex/ninetales) | ![Vulpix_Egg](02%20Egg/Vulpix_Egg.png)       | Fire   | -      | Fire       | 1         | 0        | ![ninetales-status](03%20Status/ninetales-status.png) |
| Kanto  | 0059    | ![arcanine](01%20Pokemon/arcanine.gif)   | [Arcanine](https://pokemondb.net/pokedex/arcanine)   | ![Growlithe_Egg](02%20Egg/Growlithe_Egg.png) | Fire   | -      | Fire       | 1         | 0        | ![growlithe-status](03%20Status/growlithe-status.png) |
| Kanto  | 0078    | ![ponyta](01%20Pokemon/ponyta.gif)       | [Ponyta](https://pokemondb.net/pokedex/ponyta)       | ![Ponyta_Egg](02%20Egg/Ponyta_Egg.png)       | Fire   | -      | Fire       | 1         | 0        |                                                       |
| Kanto  | 0079    | ![rapidash](01%20Pokemon/rapidash.gif)   | [Rapidash](https://pokemondb.net/pokedex/rapidash)   | ![Ponyta_Egg](02%20Egg/Ponyta_Egg.png)       | Fire   | -      | Fire       | 1         | 0         |                                                       |
