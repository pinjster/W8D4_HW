import { User, loginForm } from "./forms/login_form";
import { Canvas, CircleContainer, LeftLeaningContainer, RightLeaningContainer, Component } from "./widgets/index"

console.log("Matrix Webpack")
const circleContainer = new CircleContainer();

const canvas = new Canvas(document.body)
const component = new Component(canvas)
const leftLeaningContainer = new LeftLeaningContainer();
const rightLeaningContainer = new RightLeaningContainer();

component.container = circleContainer
component.content.innerHTML = "<img src='./public/static/images/matrix.jpg' alt='matrix-logo'>"


component.LocationTop = 3;
component.Locationleft = 3;

const formComponent  = new Component(canvas)
formComponent.container = rightLeaningContainer
formComponent.LocationTop = 4;
formComponent.height = 4;
formComponent.width = 3;

const grey = new Component(canvas);
grey.container = leftLeaningContainer;
grey.height = 11;
grey.width = 11;

const rightEye = new Component(canvas);
rightEye.container = circleContainer;
rightEye.LocationTop = 3;
rightEye.Locationleft = 8;
rightEye.container.zIndex = 1;

const mouth = new Component(canvas);
mouth.container = circleContainer;
mouth.LocationTop = 6;
mouth.Locationleft = 2;
mouth.width = 9;

const userForm = loginForm(addPostWidget)
mouth.content = userForm

console.log(canvas, component, leftLeaningContainer, rightLeaningContainer, circleContainer);

canvas.addWidget(formComponent)
canvas.addWidget(grey)
canvas.addWidget(mouth);
canvas.addWidget(component)
canvas.addWidget(rightEye)

async function addPostWidget(user: Partial<User>): Promise<void>{
    const postComponent = new Component(canvas)
    postComponent.LocationTop = 10;
    postComponent.Locationleft = 6;
    const p = document.createElement('p')
    p.innerText = await getPost(user)
    postComponent.content = p;
    canvas.addWidget(postComponent)
}

async function getPost({username, token}: Partial<User>):Promise<string>{
    const res = await fetch(`https://matrix-fakebook-123.onrender.com/api/user-posts/${username}`, {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    })
    if(res.ok){
        const data = await res.json();
        console.log(data, 'success');
        return '';
    } else {
        console.log('fail');
        return 'Try again'
    }
}



//document.body.appendChild(userForm)