#pragma once

#include "../common/scale_node.hpp"
#include "space_shooter.hpp"

void unlockSpaceShooter() {}

// galaga
ScaleNode spaceShooterNode = {
    .posx = 0,
    .posy = 0,
    .name = "spaceShooter",
    .applesCost = 0,
    .iconPath = "",
    .requiredNodes = {},
    .nodeUnlockedCallback = unlockSpaceShooter,
};

// bullet heaven

// strategy game

// forts

// tug of war

// space strategy

std::vector<ScaleNode> conquestNodes = {spaceShooterNode};