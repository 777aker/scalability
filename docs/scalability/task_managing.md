---

kanban-plugin: board

---

## TODO

- [ ] Add cards for each game


## General WIP

- [ ] Constants scripts
	- [ ] make it
	- [ ] put colors in it
	- [ ] remove hard coded colors
- [ ] Scale Tree
	- [ ] Class that holds scales (upgrades)
	- [ ] Scale class
	    - [ ] How much it costs
	    - [ ] Icon
	    - [ ] Position
	    - [ ] Requirement
	    - [ ] When unlocked function


## Game WIP

- [ ] Snake
	  - [x] Move-able snake
	  - [x] Random Apples
	  - [x] Get longer on apples
	  - [x] die on sides
	  - [x] die on body hit
	  - [ ] implement game over function
	  - [ ] delete apples on game over
	  - [ ] track apples


## Bug Fixes

- [ ] Snake - edges seem to be weird. Head is at -10 when it looks like it should be 0


## General Done

- [ ] Windows
	  - [ ] ~~Close button delete graphics (memory leak if you don't)~~ (windows will not  be closable)
	  - [x] Click on window put on top of draw order
	  - [x] Test multiple windows
- [ ] Desktop
	  - [ ] ~~Add open-able apps?~~ (Can't close them going to be forced open. I live for chaos.)


## Game Done





%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false,false],"new-line-trigger":"enter","tag-colors":[{"tagKey":"#test","color":"rgba(250, 137, 245, 1)","backgroundColor":"rgba(98, 226, 109, 0.1)"}],"tag-sort":[{"tag":"test"}]}
```
%%