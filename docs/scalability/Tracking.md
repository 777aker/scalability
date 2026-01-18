---

kanban-plugin: board

---

## TODO

- [ ] Scale Tree
	- [ ] Class that holds scales (upgrades)
	- [ ] Start up pick which tree you want - initialize that tree
	- [ ] make it spawn some time after apples in main using a sleep
	- [ ] move nodes when you drag mouse
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
- [ ] Penguin Learn to Fly
- [ ] think about cryptography / shenanigans that open knowledge tree


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
	    - [ ] make window spawn after sleep in main so they have some time to play snake
	    - [x] if list > 100 remove first item add last so we don't get excessive


## BUGS

- [ ] Fix Snake apples not on grid and can spawn in body


## DONE

- [ ] Snake
	  - [x] Move-able snake
	  - [x] Random Apples
	  - [x] Get longer on apples
	  - [x] die on sides
	  - [x] die on body hit
	  - [x] can't go opposite direction
	  - [x] implement game over function
	  - [x] delete apples on game over
- [ ] 1 Snake game to start
- [ ] Windows don't start on top of each other
- [ ] flip green and red
- [ ] green graph up red graph down
- [ ] Windows
	  - [ ] ~~Close button delete graphics (memory leak if you don't)~~ (windows will not  be closable until I change my mind)
	  - [x] Click on window put on top of draw order
	  - [x] Test multiple windows
	  - [x] add highlight or something around which window is selected
- [ ] Constant Colors




%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false],"new-line-trigger":"shift-enter","tag-colors":[{"tagKey":"#test","color":"rgba(250, 137, 245, 1)","backgroundColor":"rgba(98, 226, 109, 0.1)"}],"tag-sort":[{"tag":"test"}]}
```
%%