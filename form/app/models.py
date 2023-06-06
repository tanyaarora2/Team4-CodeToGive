from django.db import models

# Create your models here.
gender = (('F', "Female"), ("M", "Male"), ("Other", "Other"))
categories = (('Abandoned', 'Abandoned'), ('Surrendered',
              'Surrendered'), ('Orphaned', 'Orphaned'), ('Child Admitted By Family', 'Child Admitted By Family'))


class Case(models.Model):
    Case_Number = models.CharField(max_length=50, primary_key=True)
    State = models.CharField(max_length=100)
    District = models.CharField(max_length=100)
    Shelter_Home = models.CharField(max_length=300)
    Child_Name = models.CharField(max_length=100)
    Gender = models.CharField(max_length=50, choices=gender)
    DOB = models.DateField()
    Age = models.IntegerField()
    Child_Classification = models.CharField(max_length=200)
    Reason_Admission = models.TextField()
    Reason_Flagging = models.TextField()
    Last_Visit = models.DateField()
    Last_Call = models.DateField()
    Guardian = models.CharField(max_length=50)
    Sibling = models.CharField(max_length=50)
    Shelter_Stay = models.CharField(max_length=100)
    CWC_Last_Review = models.DateField()
    CWC_Last_Order = models.TextField()
    Case_History = models.TextField()
    Newspaper_Date = models.CharField(max_length=100)
    Police_Date = models.CharField(max_length=100)
    Surrender_Date = models.CharField(max_length=100)
