package cnms.hello;

import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by popsicle on 7/18/17.
 */
public class PersonOpTest {

    private List<Person> roster;

    @Before
    public void setUp() {
        roster = new ArrayList<>();

        Person p1 = new Person();
        p1.setAge(10);

        Person p2 = new Person();
        p2.setAge(15);

        roster.add(p1);
        roster.add(p2);
    }

    @Test
    public void printPersonOlderThan() throws Exception {
        PersonOp.printPersonOlderThan(roster, p ->
                p.getAge() < 13
        );
    }

}