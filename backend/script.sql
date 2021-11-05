drop database blapp;

create database blapp;

use blapp;

create table tb_blacklist (
	id_blacklist int primary key auto_increment not null,
  nm_person varchar(100) not null,
  ds_reason varchar(200),
  ds_place varchar(100),
  dt_occurred dateTime,
  dt_include dateTime not null,
  dt_lastUpdate dateTime not null
);

/*-

-- test scripts

insert
  into tb_blacklist (nm_person, ds_reason, ds_place,  dt_occurred,   dt_include, dt_lastUpdate)
values              ("People'", "Hate it", "WorldW", "2021-11-05", "2021-11-05", "2021-11-05" );

select *
  from tb_blacklist;

update tb_blacklist
   set nm_person = "Person'"
 where id_blacklist = 1;
 
select *
  from tb_blacklist
 where id_blacklist = 1;
 
delete
  from tb_blacklist
 where id_blacklist = 1;
 
select *
  from tb_blacklist;
 
truncate table tb_blacklist;

*/
