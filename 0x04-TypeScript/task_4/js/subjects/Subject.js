// task_4/js/subjects/Subject.ts
import { Subjects } from './Teacher';

export namespace Subjects {
    export class Subject {
        teacher: Teacher;

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
