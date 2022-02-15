import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('Heroes componente shallow tests', ()=>{

    let fixture: ComponentFixture<HeroesComponent>;
    let mockedService;
    let heroes;

    @Component({
        selector: 'app-hero',
        template: '<div></div>',
      })
    class MockHeroComponent {
        @Input() hero: Hero;
    }

    beforeEach(()=>{
        heroes = [
            {id:1, name: 'SpiderDude', strength:8},
            {id:2, name: 'Wonderful Woman', strength:24},
            {id:3, name: 'SuperDude', strength:55},
        ];
        mockedService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        TestBed.configureTestingModule({
            declarations:[
                HeroesComponent, 
                MockHeroComponent ],
            providers:[
                {provide: HeroService, useValue: mockedService}
            ],
        });

        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('Should update the heroes array after consuming the service', ()=>{
        
        mockedService.getHeroes.and.returnValue(of(heroes));
        fixture.detectChanges();

        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    it('Should render an li object for each item in the heroes array', ()=>{
        mockedService.getHeroes.and.returnValue(of(heroes));
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
    })
});
