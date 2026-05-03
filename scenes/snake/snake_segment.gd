extends Node2D

signal area_entered(area: Area2D)


func _on_area_2d_area_entered(area: Area2D) -> void:
	area_entered.emit(area)
