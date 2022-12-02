const input = require("./input");

(() => {
  const rock = 'A';
  const paper = 'B';
  const scissor = 'C';

  const rock_points = 1;
  const paper_points = 2;
  const scissor_points = 3;

  let total_points = 0;

  const lost = () => { total_points += 0; }

  const draw = () => { total_points += 3; }

  const won = () => { total_points += 6; }

  const moves = input.split("\n");

  // Part one
  // O(n)
  for (let i = 0; i < moves.length; i++) {
    const opponent = moves[i][0];
    const me = moves[i][2];

    if (me === 'X') {
      total_points += rock_points;
      if (opponent === paper) lost();
      else if (opponent === scissor) won();
      else draw();
      continue;
    } else if (me === 'Y') {
      total_points += paper_points;
      if (opponent === scissor) lost();
      else if (opponent === rock) won();
      else draw();
      continue;
    } else {
      total_points += scissor_points;
      if (opponent === rock) lost();
      else if (opponent === paper) won();
      else draw();
      continue;
    }
  }

  console.log(total_points);

  total_points = 0;

  // Part two
  // O(n)
  for (let i = 0; i < moves.length; i++) {
    const opponent = moves[i][0];
    const result = moves[i][2];

    if (result === 'X') {
      lost()
      if (opponent === rock) total_points += scissor_points;
      else if (opponent === paper) total_points += rock_points;
      else total_points += paper_points;
      continue;
    } else if (result === 'Y') {
      draw()
      if (opponent === rock) total_points += rock_points;
      else if (opponent === paper) total_points += paper_points;
      else total_points += scissor_points;
      continue;
    } else {
      won()
      if (opponent === rock) total_points += paper_points;
      else if (opponent === paper) total_points += scissor_points;
      else total_points += rock_points;
      continue;
    }
  }

  console.log(total_points);
})()
