describe('Ticket', function() {
      it("creates a new ticket with the given specifications", function() {
        var testTicket = new Ticket("Straight Outta Compton", true, false, 25);
        expect(testTicket.movieTitle).to.equal("Straight Outta Compton");
        expect(testTicket.matinee).to.equal(true);
        expect(testTicket.newRelease).to.equal(false);
        expect(testTicket.userAge).to.eql(25);
      });

      it("calculates ticket price based on matinee", function() {
          var testTicket = new Ticket("Straight Outta Compton", true, false, 25);
          expect(testTicket.price()).to.equal(5);
      });

      it("calculates ticket price based on non-matinee", function() {
          var testTicket = new Ticket("Straight Outta Compton", false, false, 25);
          expect(testTicket.price()).to.equal(10);
      });
});
