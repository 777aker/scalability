extends Node2D

signal area_entered(area: Area2D)


func _on_area_2d_area_entered(area: Area2D) -> void:
	if self.get_parent() != area.get_parent().get_parent(): # don't collide outside your scene
		return
	area_entered.emit(area)
