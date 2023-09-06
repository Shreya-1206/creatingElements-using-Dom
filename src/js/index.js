// Write your code here
const createPost = function ({title, content}) {
    const socialCard = document.createElement('div');
    socialCard.setAttribute('class', 'social-card');

    const icon = document.createElement('div');
    icon.setAttribute('class', 'post-icon');

    const postTitle = document.createElement('div');
    postTitle.setAttribute('class', 'post-title');

    const postUser = document.createElement('div');
    postUser.setAttribute('class', 'post-user');
    
    const postContent = document.createElement('div');
    postContent.setAttribute('class', 'post-content');

    socialCard.append(icon, postTitle, postUser, postContent);

    postTitle.innerText = title;
    postUser.innerText = 'Joe Mockery';
    postContent.innerText = content;


  document.body.prepend(socialCard);
};
createPost({
    title : 'Hey, everyone I just started my Dom Module',
    content: 'The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.'
});

createPost({
    title: 'I have completed my JavaScript Module',
    content: 'JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page.'
});