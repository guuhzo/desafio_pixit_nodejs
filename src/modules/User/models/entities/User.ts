import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
  
  @Column()
  username!: string;

  @Column()
  password!: string;
    
}

export default User;
