extends Node

var apples: int = 0:
	set(value):
		if value < 0:
			apples = 0
		else:
			apples = value
	get:
		return apples
