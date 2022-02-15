import { MessageService } from './message.service';
describe('Testing Message Service', ()=>{
    let service: MessageService;


    //Remember DAMP, the test needs to tell a story, thats why the initialization
    // is part of the Arrange instead of being within a beforeEach method
    it('should be empty after initialized', ()=>{
        service = new MessageService();

        expect(service.messages.length).toBe(0);
    });

    it('should be able to add messages when add messages is called', ()=>{
        service = new MessageService();

        service.add('Hello!');

        expect(service.messages.length).toBe(1);
    });

    it('should be able to clear messages', ()=>{
        service = new MessageService();
        service.add('Hello!');

        service.clear();

        expect(service.messages.length).toBe(0);
    })
})