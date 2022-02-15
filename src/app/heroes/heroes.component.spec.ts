import { fakeAsync, tick } from '@angular/core/testing';
import { of, Observable, Subscription } from 'rxjs';
import { HeroesComponent } from './heroes.component';
describe('Heroes Component', () => {
    let heroesComponent:HeroesComponent;
    let heroes;
    let mockHeroService;
    beforeEach(()=>{
        heroes = [
            {id:1, name: 'SpiderDude', strength:8},
            {id:2, name: 'Wonderful Woman', strength:24},
            {id:3, name: 'SuperDude', strength:55},
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        heroesComponent = new HeroesComponent(mockHeroService);
    });

    describe('delete', ()=>{
        it('Should remove the indicated hero from the heroes list', ()=>{
            //Arrange
            heroesComponent.heroes = heroes;
            mockHeroService.deleteHero.and.returnValue(of(true));
            //Act
            heroesComponent.delete(heroes[2]);

            //Assert
            expect(heroesComponent.heroes.length).toEqual(2);
        });

        it('Should call the delete method on heroService', () => {
            //Arrange
            heroesComponent.heroes = heroes;
            mockHeroService.deleteHero.and.returnValue(of(true));

            //Act
            heroesComponent.delete(heroes[2]);

            //Assert
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heroes[2]);
        });

        // it('Should have suscribed to the result', fakeAsync(() => {
        //     //Arrange
        //     heroesComponent.heroes = heroes;
        //     let action = mockHeroService.deleteHero.and.returnValue(of(true));
        //     let subscription = spyOn(mockHeroService.deleteHero(heroes[2]), 'subscribe');
        //     heroesComponent.ngOnInit();
        //     tick();
            
        //     //Act
        //     heroesComponent.delete(heroes[2]);

        //     //Assert
        //     expect(action).toHaveBeenCalledBefore(subscription);
        // }));
    });
})