---

kanban-plugin: board

---

## TODO

- [ ] Paper planet - Olexa game
- [ ] Idle Clicker
	Growth Tree
- [ ] Mandelbra Display
	Growth Tree
- [ ] Terraria
	Expansion Tree
- [ ] Crafting
	Expansion Tree
- [ ] Town Management
	Expansion Tree
- [ ] Logistics Management
	Expansion Tree
- [ ] Strikefleet Omega
	Expansion Tree
- [ ] Shark
	Consumption Tree
- [ ] Solar 2
	Consumption Tree
- [ ] Destroy Planet
	Consumption Tree
- [ ] Bullet Heaven
	Conquest Tree
- [ ] Chess
	Conquest Tree
- [ ] Strategy Game
	Conquest Tree
- [ ] Galaga
	Conquest Tree
- [ ] Forts
	Conquest Tree
- [ ] Tug of War
	Conquest Tree
- [ ] Space Strategy
	Conquest Tree
- [ ] Map Display
	Conquest Tree
- [ ] Storage = food drop minigame for keeping food on death


## WIP

- [ ] Apples
	- [x] register apples function
	- [x] add apples function with id
	- [x] remove apples function
	- [x] remove apples function with id
	- [x] get apples with id
	- [x] get apples
	- [ ] Display food
	    - [x] Display food window + class
	    - [x] save list of food over time every x seconds
	    - [x] get max food
	    - [x] make lines of food
	        - [x] x = i / len
	        - [x] y = food / max x height
	    - [ ] show icon at end of list
- [ ] Scale Tree
	- [ ] Class that holds scales (upgrades)
	- [ ] Start up pick which tree you want - initialize that tree
	- [ ] Icon for each tree
	    - [ ] Consumption
	    - [ ] Expansion
	    - [ ] Knowledge
	    - [ ] Growth
	    - [ ] Conquest
	    - [ ] Greyed out for now
	- [ ] Scale class
	    - [ ] How much it costs
	    - [ ] Icon
	    - [ ] Position
	    - [ ] Requirements
	    - [ ] When unlocked function


## BUGS

- [ ] Snake - edges seem to be weird. Head is at -10 when it looks like it should be 0
- [ ] display apples
	 - [ ] x beginning is off
	 - [ ] y max is off
	 - [ ] snake doesn't remove it's apples when you die


## DONE

- [ ] Add cards for each game
- [ ] Windows
	  - [ ] ~~Close button delete graphics (memory leak if you don't)~~ (windows will not  be closable)
	  - [x] Click on window put on top of draw order
	  - [x] Test multiple windows
- [ ] Desktop
	  - [ ] ~~Add open-able apps?~~ (Can't close them going to be forced open. I live for chaos.)
- [ ] Constants scripts
	- [x] make it
	- [x] put colors in it
	- [x] remove hard coded colors
- [ ] Snake
	  - [x] Move-able snake
	  - [x] Random Apples
	  - [x] Get longer on apples
	  - [x] die on sides
	  - [x] die on body hit
	  - [x] implement game over function
	  - [x] delete apples on game over




%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false],"new-line-trigger":"shift-enter","tag-colors":[{"tagKey":"#test","color":"rgba(250, 137, 245, 1)","backgroundColor":"rgba(98, 226, 109, 0.1)"}],"tag-sort":[{"tag":"test"}]}
```
%%