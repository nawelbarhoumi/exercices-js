function object(){
    var team= new Object();
    var member1={
        id: 1,
        name: 'sam',
        grade: 'student'
    };
    var member2={
        id: 2,
        name: 'john',
        grade : 'student'
    };
    var member3={
        id: 3,
        name: 'jane',
        grade: 'student'
    };
    team.member1 =  member1;
    team.member2 = member2;
    team.member3 = member3;
    console.log(team);
}