from django.db import models

# Create your models here.
gender = (('F', "Female"), ("M", "Male"), ("Other", "Other"))
categories = (('Abandoned', 'Abandoned'), ('Surrendered',
              'Surrendered'), ('Orphaned', 'Orphaned'), ('Child Admitted By Family', 'Child Admitted By Family'))
Mgmt_progress = (('In Progress', 'In Progress'),
                 ('To be Assigned', 'To be Assigned'), ('Action Needed', 'Action Needed'))


class Case(models.Model):
    Case_Number = models.CharField(max_length=50, primary_key=True)
    State = models.CharField(max_length=100, default='Maharashtra')
    District = models.CharField(max_length=100, default='Mumbai')
    Shelter_Home = models.CharField(max_length=300)
    Child_Name = models.CharField(max_length=100,  default='Hidden')
    Gender = models.CharField(max_length=50, choices=gender)
    DOB = models.DateField(null=True)
    Age = models.IntegerField()
    Child_Classification = models.CharField(max_length=200, choices=categories)
    Reason_Admission = models.TextField(null=True)
    Reason_Flagging = models.TextField(default="", null=True)
    Last_Visit = models.CharField(max_length=20, null=True)
    Last_Call = models.CharField(max_length=20, null=True)
    Guardian = models.CharField(max_length=50, null=True)
    Sibling = models.CharField(max_length=50, null=True)
    Shelter_Stay = models.CharField(max_length=100)
    CWC_Last_Review = models.DateField(null=True)
    CWC_Last_Order = models.TextField(null=True)
    Case_History = models.TextField(default='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    Newspaper_Date = models.CharField(max_length=100, null=True)
    Police_Date = models.CharField(max_length=100, null=True)
    Surrender_Date = models.CharField(max_length=100, null=True)
    # Management_Progress = models.CharField(max_length=100, choices=Mgmt_progress, default=)
    Assigned_To = models.CharField(max_length=100, default='None')
    Action = models.BooleanField(default=False, null=True)
    Action_Problem = models.TextField(null=True)
    Action_Solution = models.TextField(null=True)
    Completed = models.BooleanField(default=False, null=True)


class Social_Worker(models.Model):
    Name = models.CharField(max_length=100)
    SW_Age = models.IntegerField()
    Address = models.TextField()
    Active_Cases = models.IntegerField(default=20)
    Solved_Cases = models.IntegerField(default=30)
