INSERT INTO users (provider, first_name, last_name, email, username, password)
    VALUES (false, 'JoJo', 'Myles', 'jo.myles3112@gmail.com,', 'jmyles1', 'password' ),
        (false, 'Patrick', 'Collins','patrickcollins24@yahoo.com,', 'patrickcollins24','password'),
        (false, 'Josh', 'Cook','jcook@gmail.com,', 'jcook','password'),
        (true, 'Carter', 'Rohn','crohn@gmail.com,', 'crohn','password'),

INSERT INTO appointments (description, date, time, provider_name, location, user_id)
    VALUES ('Housing Search',04/23/2021 , 0800, 'Carter Rohn', 'Atlant CBOC', 1 ),
        ('HUD-VASH intake',05/02/2021 ,0900, 'Carter Rohn','Huntsville CBOC', 2),
        ('Va Benefits ', 06/02/2021 ,1030, 'Carter Rohn','Columbis CBOC', 3),


INSERT INTO events (title, description, date, time, location)
    VALUES ('Resume Workshop', 'This workshop teaches Veterans how to prepare a professional resume that reflects their skills, knowledge and education that are relevant to the job they are seeking.', 04/19/2021, 1230, 'Veteran Community center Atlanta,GA 30331' ),
        ('Stand Down','Outreach event where Veterans  receive referrals for health care, housing solutions, employment, substance use treatment, mental health counseling and other essential services.', 05/02/2021 ,0800, 'Toyota Field, Madison, AL 35758'),
        ('Memorial Day Service', 'This service provides friends and families the opportunity to honor our veterans who have made the ultimate sacrifice to our country.',05/28/2021 ,1300, 'Columbia Natioanl Cemetary Columbia, SC 29123');
