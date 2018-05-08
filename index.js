function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for ( let i=0; i < ranked.length; i++ ) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML)+n;
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

console.log(deepestChild())