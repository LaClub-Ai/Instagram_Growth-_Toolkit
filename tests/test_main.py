import pytest
import sys
import os

def test_basic_functionality():
    """تست بسیار ساده برای شروع"""
    assert True

def test_python_version():
    """بررسی نسخه Python"""
    assert sys.version_info >= (3, 9)

class TestInstagramToolkit:
    def test_initialization(self):
        """تست initialization"""
        assert True