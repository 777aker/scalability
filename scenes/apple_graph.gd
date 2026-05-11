extends Control

var apples: Array[int] = []


func _process(_delta) -> void:
	$CurrentApples.text = str(AppleManager.apples)

func _on_timer_timeout() -> void:
	apples.append(AppleManager.apples)
	while apples.size() > 100:
		apples.pop_front()
	queue_redraw()


func _draw() -> void:
	var fake_max = apples.max()
	if fake_max == 0:
		fake_max = 1
	var ybound = self.get_global_rect().size.y - 20
	var xbound = self.get_global_rect().size.x - 10
	var current_color = Color(26/255.0, 188/255.0, 156/255.0)
	for i in range(0, apples.size()-1):
		if apples[i+1] > apples[i]:
			current_color = Color(26/255.0, 188/255.0, 156/255.0)
		elif apples[i+1] < apples[i]:
			current_color = Color(231/255.0, 76/255.0, 60/255.0)
		var p1 = Vector2(i/float(apples.size())*xbound + 5, ybound + 5 - apples[i]/float(fake_max)*ybound)
		var p2 = Vector2((i+1)/float(apples.size())*xbound + 5, ybound + 5 - apples[i+1]/float(fake_max)*ybound)
		draw_line(p1, p2, current_color)
