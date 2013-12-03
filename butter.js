var buf = new Buffer('iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI2QjY1M0IwNTg2MTFFMzhDRkNFMDBDRkRCOTMwMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUI2QjY1M0MwNTg2MTFFMzhDRkNFMDBDRkRCOTMwMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQjZCNjUzOTA1ODYxMUUzOENGQ0UwMENGREI5MzAyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQjZCNjUzQTA1ODYxMUUzOENGQ0UwMENGREI5MzAyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtVngWcAAAMAUExURSqo3juy5Bmh28Xn9ozQ7VO55ITN7PH5/Ue04qjc8eLz+kSz4jm15XDE6dTt+Dat4Cen3fD5/X7K6zWv47fi9Daw47Lg85rW76Ta8WG+5svq95zW7zWs37rj9Diu4HbH6lW65HXH6WbA546IiMLm9ZTT7tjv+e74/PL6/eP0+yin3Tmu4GHE6hui2+Dy+mC+5la65Tyv4UCx4UWz4qPZ8cPm9kKy4d/y+gCIvOn2/Kzd8sjp9lS55IDL6zet4Ey241y85V695n3K60O15fX7/Tix4x+k3Nvw+ZjV77zk9fT7/bHf85/Y8JHS7tHs+D2w4XrJ6qHZ8Mzq9/n8/ur3/D+w4V++5kaz4u34/Eq142XA59bu+U22427E6MDl9e/4/Duv4Kbb8fP6/Ve65eHz+jew4yCk3LPg82/E6J7X8JXU7ki04h2i3D6w4SKl3Pf8/nTG6XfH6tDs+Bqh20+341i75cTn9mrC6CWm3UGx4d7x+tzx+WrE643R7YPM7GfB55vW7y+q3k+t0YfO7E245z2y5Fa85+z3/Knc8hORwV295r/l9U2s0FC35NHq867e8uv3/Cyp3nPG6fj8/ojO7NXu+HnI6srp90q35rXh81q85R6j3Ob1+8bo9lG45OT0+6Xa8W3D6N3x+qbc8zSs37Tg87ni9GjB52DA6WXC6lK45ILM6y6p3lm96Kjb8XDF6XHF6ef1+23G64rP7c7r9zGr383r+GO/50m14sfo9mK/5jCq32nC6Mnp967f9MHm9ZDS7onR7jOs31G653zL7Ryi2ySl3ej1+4/R7dfv+dPt+GfE6njK7Pb7/r/m9s/r+KPb8vX7/jKr30Cz5ZPT7pbU75HU8Eq45rvj9HLF6XrK7bji9Kze9K/g9HfJ7eb1/HHH6+74/Ve86HfK7Njv+qrc8jav493y+o7S77zl9r7l9nLH7JbW8eX0+7rk9Y3S737M7VK658rq+Nvx+iam3fn9/oDN7Ue25njJ7Ljj9XXI7OL0+6DY8LLh9OX1+////8GcPEsAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAV/ElEQVR42uydd4Ab1Z2AzRvNaiUhaaQVKwR4YffW2F4H24CxATdcsAHbgLEDBtN77zX0UEIJoQVCS4BAKIEAgQsEuCSXSy7l0nvP9d57v3evzIxm1CxZstk13/fHakaamad537zf+703I3uSfNfyHo18T2c7HfLjV1/98bROi/r9f/rvdjf9DZ8tdNIfev/t7//QpJo337dFivrO5OWdbP6BrSJ9e43cvjPrX1y23XbLvthZQaue/6Mv3frcU//aifUtddIf3HfffT9opa8bXvzkPWbJE6fckOzkKGdeNmvWrMuWzG+xyQlCsbS6vvOis1ofU4irt570jqxfsGwHxbJOiin8/KHTBgYG/uzf/2u/9q1vsZO+XUm/3Ui/W1sRU9TSR8yS6OAodgeR2uQmZ4Trn1RrlxxwSNPtj1Cfz7BtRDRkRg+l6zjf/j5/eJqWflqhg2L+7ZaBT6mX5wa2++u2I/yWu9LDln6yX5d3SvmsWVisL9CDEwuGrtRr3t4L50V204H6/urqkN337nU7nnHT9cedmX3r2v03nhwrZ63d4q4weJ9ujrqpiyRXvQZrOaZ30nW/vn37+3xvB8P32t/j9R8M/KN8/Q/+Uj4/sN3fvfOJTNinr/Hr8no51S5M/cSCmmo+d1Ww12+a9WP14rSrL3Ye9hpZ+czZkXIc+95IsP4Js3qQPHlaQGFavfNL9eLBjaUv7p30sLm3yYHa+YEd7PAXAwPL5Ddu+aX89cDAN8dJCqulz/Hr8klZNK9XVqv3xbvmrrBLh/k7PG7WFq1J7O2JFpwbSQyONe+sDFaParB5nfM7/CtslwZcedE7J/27yvqB3+1gh+cGBk67Zbv/kL+8eWDgS+NI+ga/5tfJiIZLvCVPPKBTj0Muf6+9FOwO0xspPv1R77BdMo+ccscB/Yv8t6Lh+xdHHnlduDJftJRu1x/cWolcp9Llsg7zuE+pJG7gy/Ipnc09NI6k+wF3f/lboYQVC3ePbHSVee+4BtK9wy5949rbjph6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', 'base64');

var file = require('fs');

console.log(buf);

file.writeFile("test.png", buf);

var buf2 = new Buffer('Hello Buffer!');
console.log(buf2[10]);
buf2[10] = -10;
console.log(buf2.length);

var buf3 = buf2.slice(2, 6);
console.log(buf3.toString());
var buf4 = new Buffer(buf3);

var buf5 = new Buffer(5);
buf2.copy(buf5, 0, 2, 6);

console.log('buf5--' + buf5.toString());

buf2[4] = 102;
console.log('buf3--' + buf3.toString());

console.log('buf4--' + buf4.toString());

console.log(buf5.toString());

var b64 = buf5.toString('base64');
console.log(b64);