package cnms.repository;

import cnms.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by popsicle on 7/18/17.
 */
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
