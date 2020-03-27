const generateUniqueId = require('../../src/utils/generaUniqueId');


describe('Generate Unique ID', () => {
    
    it('should generate an unuque ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    })
  
})