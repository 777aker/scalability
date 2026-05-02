#pragma once

#include "../common/scale_node.hpp"
#include "space_shooter.hpp"
#include <map>

void unlockBulletHeaven() {}

void unlockForts() {}

void unlockTugOfWar() {}

void unlockStrategy() {}

void unlockSpaceShooter() {
  SpaceShooter *spaceShooter = new SpaceShooter(800, 1000);
  windows.push_back(std::move(spaceShooter));
}

void unlockSpaceStrategy() {}

// bullet heaven
ScaleNode bulletHeavenNode = {
    .posx = 800,
    .posy = 800,
    .applesCost = 0,
    .iconPath = "",
    .requiredNodes = {},
    .nodeUnlockedCallback = unlockBulletHeaven,
    .unlocked = false,
};

// forts
ScaleNode fortsNode = {
    .posx = 400,
    .posy = 600,
    .applesCost = 0,
    .iconPath = "",
    .requiredNodes = {"bulletHeaven"},
    .nodeUnlockedCallback = unlockForts,
    .unlocked = false,
};

// tug of war
ScaleNode tugOfWarNode = {
    .posx = 1000,
    .posy = 550,
    .applesCost = 0,
    .iconPath = "",
    .requiredNodes = {"bulletHeaven"},
    .nodeUnlockedCallback = unlockTugOfWar,
    .unlocked = false,
};

// strategy game
ScaleNode strategyNode = {
    .posx = 1250,
    .posy = 350,
    .applesCost = 0,
    .iconPath = "",
    .requiredNodes = {"tugOfWar"},
    .nodeUnlockedCallback = unlockStrategy,
    .unlocked = false,
};

// space shooter
ScaleNode spaceShooterNode = {
    .posx = 1400,
    .posy = 600,
    .applesCost = 0,
    .iconPath = "",
    .requiredNodes = {"strategy"},
    .nodeUnlockedCallback = unlockSpaceShooter,
    .unlocked = false,
};

// space strategy
ScaleNode spaceStrategyNode = {
    .posx = 1300,
    .posy = 1000,
    .applesCost = 0,
    .iconPath = "",
    .requiredNodes = {"spaceShooter"},
    .nodeUnlockedCallback = unlockSpaceStrategy,
    .unlocked = false,
};

std::map<std::string, ScaleNode> conquestNodes = {
    {"bulletHeaven", bulletHeavenNode}, {"forts", fortsNode},
    {"tugOfWar", tugOfWarNode},         {"strategy", strategyNode},
    {"spaceShooter", spaceShooterNode}, {"spaceStrategy", spaceStrategyNode},
};