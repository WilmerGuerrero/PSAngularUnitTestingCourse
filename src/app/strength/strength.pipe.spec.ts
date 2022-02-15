import { StrengthPipe } from './strength.pipe';
describe('StrengthPipe', ()=>{
    it('should display weak if strength is 5', ()=>{
        let pipe = new StrengthPipe();

        expect(pipe.transform(8)).toEqual('8 (weak)')
    });

    it('should display strong if strengh is between 10 and 20', ()=>{
        let pipe = new StrengthPipe();

        expect(pipe.transform(18)).toEqual('18 (strong)')
    });

    it('should display unbelievable if strengh is higher than 20', ()=>{
        let pipe = new StrengthPipe();

        expect(pipe.transform(25)).toEqual('25 (unbelievable)')
    });
})