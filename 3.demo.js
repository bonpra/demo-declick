(window.webpackJsonpDeclick=window.webpackJsonpDeclick||[]).push([[3],{18:function(e,r,n){"use strict";n.r(r),n.d(r,"description",(function(){return i})),n.d(r,"resources",(function(){return t})),n.d(r,"code",(function(){return a}));var i="Illustration de l'utilisation de l'objet GroupeSprites et de la gestion des rencontres avec un autre Sprite",t={book:["image","book.png"],female:["spritesheet","female.png","female.json"]},a="livres = 5\nfunction ramasser(qui, livre) {\n\tlivre.supprimer()\n\tlivres--\n\tif (livres == 0) {\n\t\tqui.arrêter()\n\t}\n}\na = new GroupeSprites('book')\na.définirTaille(30,40)\na.créerSprite(200,40)\na.créerSprite(300,40)\na.créerSprite(400,40)\na.créerSprite(500,40)\na.créerSprite(600,40)\nb = new Sprite('female')\nb.siRencontre(a, ramasser)\nb.avancerToujours()"}}]);