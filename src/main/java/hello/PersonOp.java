package hello;

import java.util.List;
import java.util.function.Predicate;

/**
 * Created by popsicle on 7/18/17.
 */
public class PersonOp {

    public static void printPersonOlderThan(List<Person> roster, Predicate<Person> tester) {
        for (Person p: roster) {
            if (tester.test(p)) {
                p.printPerson();
            }
        }
    }
}
