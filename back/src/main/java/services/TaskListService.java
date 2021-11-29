package services;


import models.TaskList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.TaskListRepository;

@Service
public class TaskListService {

    @Autowired
    private TaskListRepository repository;

    public Iterable<TaskList> list(){
        return repository.findAll();
    }

    public TaskList get(Long id){
        return repository.findById(id).orElseThrow();
    }

    public TaskList save(TaskList taskList){
        return repository.save(taskList);
    }

    public void delete(Long id){
        repository.delete(get(id));
    }
}
