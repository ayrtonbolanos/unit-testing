import { voteComponent } from "./vote.component";

describe('voteComponent',()=>{

    let component : voteComponent;

    beforeEach(() =>{
        component = new voteComponent();
    });

    it('should incremet totalVotes when upvoted',()=>{
        //act
        component.upVote();
        //assert
        expect(component.totalVotes).toBe(1);
    })

    it('should dencremet totalVotes when downvoted',()=>{
        //act
        component.downVote();
        //assert
        expect(component.totalVotes).toBe(-1);
    })
});