class User {
    constructor() {
      const names = ['Jaidyn', 'Danna', 'Vance',
        'Esteban', 'Vanessa', 'Sloane','Yasmine',
        'Payton', 'Santiago', 'Chloe',
      ]
              
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      }
  
      const requireName = Math.random() < 0.5 ? true : false;
      const setUserName = Math.random() < 0.5 ? true : false;
      
      this.friends = 0;   
        
      const name = names[getRandomInt(names.length -1)]
  
      this.requireName = requireName;
      this.name = requireName || setUserName ?  name : '';
    }
};
  
User.prototype.newFriends = function(){
    console.log('a new potential friends!');
    this.friends++;
    return this.friends;
}
  
module.exports = {User}