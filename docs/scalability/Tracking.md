---

kanban-plugin: board

---

## TODO

- [ ] Mandelbra Display
	Growth Tree
- [ ] Map Display
	Conquest Tree
- [ ] Storage = food drop minigame for keeping food on death
- [ ] think about cryptography / shenanigans that open knowledge tree


## WIP

- [ ] Galaga
	Conquest Tree
	- [ ] the little ship that could
	- [ ] bullets
	- [ ] random enemies
		- [ ] enemies die on hit
		- [ ] enemies shoot back
- [ ] Scale Tree
	- [x] Start up pick which tree you want - initialize that tree
	- [x] make it spawn some time after apples in main using a sleep
	- [ ] move nodes when you drag mouse
	- [ ] display icon for each node
	- [ ] Hover over display required food and have food
	- [ ] fix node colors when can't unlock
	- [x] Icon for each tree
	    - [x] Consumption
	    - [x] Expansion
	    - [x] Knowledge
	    - [x] Growth
	    - [x] Conquest
	    - [x] Greyed out for now
	- [x] Scale class
	    - [x] How much it costs
	    - [x] Icon
	    - [x] Position
	    - [x] Requirements
	    - [x] When unlocked function
- [ ] Bullet Heaven
	- [ ] brainstorm
		- [ ] vampire survivors


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
- [ ] Apples
	- [x] register apples function
	- [x] add apples function with id
	- [x] remove apples function
	- [x] remove apples function with id
	- [x] get apples with id
	- [x] get apples
	- [x] Display food
	    - [x] Display food window + class
	    - [x] save list of food over time every x seconds
	    - [x] get max food
	    - [x] make lines of food
	        - [x] x = i / len
	        - [x] y = food / max x height
	    - [ ] show icon at end of list
	    - [ ] ~~make window spawn after sleep in main so they have some time to play snake~~
	    - [x] if list > 100 remove first item add last so we don't get excessive
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