---
cssclasses:
  - pokemon
  - blue
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
    Evolving: Boolean($row.Evolving) >= 1
    Collected: Boolean($row.Collected) >= 1
    To Collect: Boolean($row.Collected) < 1
pagination:
  page-size: 8
  page-sizes:
   - 8
# hide-controls: false
hide-configuration: true
```

| Region | Pokedex | Pokemon                                  | Pokedex Entry                                        | Egg                                          | Type A   | Type B | Best Field         | Collected | Evolving | Status                                                |
| ------ | ------- | ---------------------------------------- | ---------------------------------------------------- | -------------------------------------------- | -------- | ------ | ------------------ | --------- | -------- | ----------------------------------------------------- |
| Kanto  | 0037    | ![vulpix](01%20Pokemon/vulpix.gif)       | [Vulpix](https://pokemondb.net/pokedex/vulpix)       | ![Vulpix_Egg](02%20Egg/Vulpix_Egg.png)       | Fire     | -      | Fire               | 1         | 0        | ![vulpix-status](03%20Status/vulpix-status.png)       |
| Kanto  | 0038    | ![ninetales](01%20Pokemon/ninetales.gif) | [Ninetales](https://pokemondb.net/pokedex/ninetales) | ![Vulpix_Egg](02%20Egg/Vulpix_Egg.png)       | Fire     | -      | Fire               | 1         | 1        | ![ninetales-status](03%20Status/ninetales-status.png) |
| Kanto  | 0059    | ![arcanine](01%20Pokemon/arcanine.gif)   | [Arcanine](https://pokemondb.net/pokedex/arcanine)   | ![Growlithe_Egg](02%20Egg/Growlithe_Egg.png) | Fire     | -      | Fire               | 1         | 1        | ![growlithe-status](03%20Status/growlithe-status.png) |
| Kanto  | 0078    | ![ponyta](01%20Pokemon/ponyta.gif)       | [Ponyta](https://pokemondb.net/pokedex/ponyta)       | ![Ponyta_Egg](02%20Egg/Ponyta_Egg.png)       | Fire     | -      | Fire               | 1         | 0        | ![ponyta-status](03%20Status/ponyta-status.png)       |
| Kanto  | 0079    | ![rapidash](01%20Pokemon/rapidash.gif)   | [Rapidash](https://pokemondb.net/pokedex/rapidash)   | ![Ponyta_Egg](02%20Egg/Ponyta_Egg.png)       | Fire     | -      | Fire               | 1         | 1        | ![rapidash-status](03%20Status/rapidash-status.png)   |
| Kanto  | 0092    | ![gastly](01%20Pokemon/gastly.gif)       | [Gastly](https://pokemondb.net/pokedex/gastly)       | ![](02%20Egg/Gastly_Egg.png)                 | Ghost    | Poison | Ghost              | 1         | 0        | ![gastly-status](03%20Status/gastly-status.png)       |
| Kanto  | 0093    | ![](01%20Pokemon/haunter.gif)            | [Haunter](https://pokemondb.net/pokedex/haunter)     | ![](02%20Egg/Gastly_Egg.png)                 | Ghost    | Poison | Ghost              | 1         | 0        | ![haunter-status](03%20Status/haunter-status.png)     |
| Kanto  | 0111    | ![](01%20Pokemon/rhyhorn-f.gif)          | [Rhyhorn](https://pokemondb.net/pokedex/rhyhorn)     | ![](02%20Egg/Rhyhorn_Egg.png)                | Ground   | Rock   | Water/Grass/Ground | 1         | 0        | ![rhyhorn-status](03%20Status/rhyhorn-status.png)     |
| Kanto  | 0114    | ![](01%20Pokemon/tangela.gif)            | [Tangela](https://pokemondb.net/pokedex/tangela)     | ![](02%20Egg/Tangela_Egg.png)                | Grass    | -      | Grass              | 1         | 0        | ![tangela-status](03%20Status/tangela-status.png)     |
| Kanto  | 0129    | ![](01%20Pokemon/magikarp.gif)           | [Magikarp](https://pokemondb.net/pokedex/magikarp)   | ![](02%20Egg/Magikarp_Egg.png)               | Water    | -      | Water              | 1         | 0        | ![magikarp-status](03%20Status/magikarp-status.png)   |
| Kanto  | 0132    | ![](01%20Pokemon/ditto.gif)              | [Ditto](https://pokemondb.net/pokedex/ditto)         | ![](02%20Egg/Ditto_Egg.png)                  | Normal   | -      | Normal             | 0         | 0        |                                                       |
| Kanto  | 0133    | ![](01%20Pokemon/eevee%201.gif)          | [Eevee](https://pokemondb.net/pokedex/eevee)         | ![](02%20Egg/Eevee_Egg%201.png)              | Normal   | -      | Normal             | 0         | 0        |                                                       |
| Kanto  | 0135    | ![](01%20Pokemon/jolteon%201.gif)        | [Jolteon](https://pokemondb.net/pokedex/jolteon)     | ![](02%20Egg/Eevee_Egg%201.png)              | Electric | -      | Electric           | 0         | 1        | ![jolteon-status](03%20Status/jolteon-status.png)     |
| Kanto  | 0136    | ![](01%20Pokemon/flareon.gif)            | [Flareon](https://pokemondb.net/pokedex/flareon)     | ![](02%20Egg/Eevee_Egg%201.png)              | Fire     | -      | Fire               | 0         | 0        |                                                       |
| Kanto  | 0143    | ![](01%20Pokemon/snorlax.gif)            | [Snorlax](https://pokemondb.net/pokedex/snorlax)     | ![](02%20Egg/Snorlax_Egg.png)                | Normal   | -      | Normal             | 1         | 0        | ![snorlax-status](03%20Status/snorlax-status.png)     |
| Kanto  | 0147    | ![](01%20Pokemon/dratini.gif)            | [Dratini](https://pokemondb.net/pokedex/dratini)     | ![](02%20Egg/Dratini_Egg.png)                | Dragon   | -      | Dragon             | 1         | 0        | ![dratini-status](03%20Status/dratini-status.png)     |
| Kanto  | 0151    | ![](01%20Pokemon/mew.gif)                | [Mew](https://pokemondb.net/pokedex/mew)             | ![](02%20Egg/Mew_Egg.png)                    | Psychic  | -      | Psychic            | 0         | 0        |                                                       |
| Johto  | 0152    | ![chikorita](01%20Pokemon/chikorita.gif) | [Chikorita](https://pokemondb.net/pokedex/chikorita) | ![Chikorita_Egg](02%20Egg/Chikorita_Egg.png) | Grass    | -      | Grass              | 1         | 0        | ![chikorita-status](03%20Status/chikorita-status.png)                                                      |
