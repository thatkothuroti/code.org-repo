function spinning_right(this_sprite) {
  turn(this_sprite, 6, "right");
}

function swimming_left_and_right(this_sprite) {
  if (getProp(this_sprite, "direction") == 0) {
    mirrorSprite(this_sprite, "right");
  } else if (getProp(this_sprite, "direction") == 180) {
    mirrorSprite(this_sprite, "left");
  }
  moveForward(this_sprite, 5);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", 180);
  }
}

function shrinking(this_sprite) {
  changePropBy(this_sprite, "scale", -1);
}

function patrolling(this_sprite) {
  moveForward(this_sprite, 5);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", 180);
  }
}

function math_random_int(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function wandering(this_sprite) {
  if (math_random_int(0, 5) == 0) {
    changePropBy(this_sprite, "direction", math_random_int(-25, 25));
  }
  moveForward(this_sprite, 1);
  if (isTouchingEdges(this_sprite)) {
    edgesDisplace(this_sprite);
    changePropBy(this_sprite, "direction", math_random_int(135, 225));
  }
}

function growing(this_sprite) {
  changePropBy(this_sprite, "scale", 1);
}

function jittering(this_sprite) {
  changePropBy(this_sprite, "scale", math_random_int(-1, 1));
}

function moving_east(this_sprite) {
  moveInDirection(this_sprite, 5, "East");
}

function moving_north(this_sprite) {
  moveInDirection(this_sprite, 5, "North");
}

function moving_south(this_sprite) {
  moveInDirection(this_sprite, 5, "South");
}

function moving_west(this_sprite) {
  moveInDirection(this_sprite, 5, "West");
}

makeNewSpriteAnon("fish_red", ({"x":300,"y":301}));
addBehaviorSimple(({costume: "fish_red"}), new Behavior(swimming_left_and_right, []));
setBackground('#3333ff');
makeNewSpriteAnon("fish_green", ({"x":100,"y":100}));
addBehaviorSimple(({costume: "fish_green"}), new Behavior(swimming_left_and_right, []));
setBackgroundImage("https://studio.code.org/blockly/media/skins/studio/background_underwater.png");
makeNewSpriteAnon("fish_brown", ({"x":201,"y":200}));
addBehaviorSimple(({costume: "fish"}), undefined);
