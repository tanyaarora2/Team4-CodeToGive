from rest_framework import serializers
from .models import *


class CaseReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = ['Case_Number',
                  'State',
                  'District',
                  'Shelter_Home',
                  'Child_Name',
                  'Gender',
                  'DOB',
                  'Age',
                  'Child_Classification',
                  'Reason_Admission',
                  'Reason_Flagging',
                  'Last_Visit',
                  'Last_Call',
                  'Guardian',
                  'Sibling',
                  'Shelter_Stay',
                  'CWC_Last_Review',
                  'CWC_Last_Order',
                  'Case_History',
                  'Newspaper_Date',
                  'Police_Date',
                  'Surrender_Date',
                  ]


class SWReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social_Worker
        fields = ['Name',
                  'SW_Age',
                  'Address',
                  'Active_Cases',
                  'Solved_Cases', ]
