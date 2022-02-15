import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component"

describe('Hero component shallow integration', ()=>{
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas:[NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeroComponent);
    });

    it('It should get the correct hero', ()=>{
        //Arrange
        fixture.componentInstance.hero = {id:1, name:'Aquaman', strength:20};
        fixture.detectChanges();
        //Assert
        expect(fixture.componentInstance.hero.name).toEqual('Aquaman');
    });

    it('should contain the a hero name within the anchor', ()=>{
        //Arrange
        fixture.componentInstance.hero = {id:1, name:'SuperDude', strength:5};
        fixture.detectChanges();

        //Assert (using DebugElement)
        expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('SuperDude')
        //Assert (using native element)
        //expect(fixture.nativeElement.querySelector('a').textContent).toContain('SuperDude');
    })
});